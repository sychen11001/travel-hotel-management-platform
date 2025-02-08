import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignup } from "./useSignup";

// 电子邮件正则表达式: /\S+@\S+\.\S+/

function SignupForm() {
  const { signup, isLoading } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSettled: () => reset(),
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="全名" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isLoading}
          {...register("fullName", { required: "这个字段是必需的" })}
        />
      </FormRow>

      <FormRow label="电子邮件" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isLoading}
          {...register("email", {
            required: "这个字段是必需的",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "请提供一个有效的电子邮件地址",
            },
          })}
        />
      </FormRow>

      <FormRow label="密码（至少 8 个字符）" error={errors?.password?.message}>
        <Input
          type="password"
          id="password"
          disabled={isLoading}
          {...register("password", {
            required: "这个字段是必需的",
            minLength: {
              value: 8,
              message: "密码至少需要 8 个字符",
            },
          })}
        />
      </FormRow>

      <FormRow label="确认密码" error={errors?.passwordConfirm?.message}>
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          {...register("passwordConfirm", {
            required: "这个字段是必需的",
            validate: (value) =>
              value === getValues().password || "两次密码不匹配",
          })}
        />
      </FormRow>

      <FormRow>
        {/* 这里的type="reset"是一个HTML属性 */}
        <Button
          variation="secondary"
          type="reset"
          disabled={isLoading}
          onClick={reset}
        >
          取消
        </Button>
        <Button disabled={isLoading}>创建新用户</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
