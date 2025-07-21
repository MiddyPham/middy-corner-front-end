"use client";
import { useRouter } from "next/navigation";
import TypingAnimation from "./components/TypingAnimation";
import {
  LoginContainer,
  MatrixRain,
  ParticleSystem,
  LoginCard,
  LoginHeader,
  LoginSubtitle,
  Form,
  FormGroup,
  Label,
  Input,
  BackLink,
  ErrorMessage,
  BackgroundPattern,  
} from "./loginStyle";
import { useLogin } from "./useLogin";

const LoginPage = () => {
  const {
    cardRef,
    serverError,
    register,
    handleSubmit,
    errors,
    onSubmit,
    SubmitButtonWithStatus,
    matrixColumns,
    particles,
    backgroundPatterns,
  } = useLogin();

  return (
    <LoginContainer>
      <MatrixRain>{matrixColumns}</MatrixRain>
      <ParticleSystem>{particles}</ParticleSystem>
      <BackgroundPattern>{backgroundPatterns}</BackgroundPattern>

      <LoginCard ref={cardRef}>
        <LoginHeader>
          <TypingAnimation text="Ảo Giác Thật" speed={150} />
          <LoginSubtitle>
            Bước vào thế giới của những điều không thể
          </LoginSubtitle>
        </LoginHeader>

        <Form onSubmit={handleSubmit(onSubmit)}>
          {serverError && (
            <ErrorMessage id="error-message">{serverError}</ErrorMessage>
          )}

          <FormGroup>
            <Label htmlFor="email">Mật danh</Label>
            <Input
              type="text"
              id="email"
              placeholder="Nhập mật danh để vào cửa"
              className={errors.email ? "error" : ""}
              aria-describedby={serverError || errors.email ? "error-message" : undefined}
              {...register("email", { 
                required: "Vui lòng nhập mật danh",
                minLength: {
                  value: 3,
                  message: "Mật danh phải có ít nhất 3 ký tự"
                }
              })}
            />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">Nói cả bí mật nữa</Label>
            <Input
              type="password"
              id="password"
              placeholder="Nói đi"
              className={errors.password ? "error" : ""}
              aria-describedby={serverError || errors.password ? "error-message" : undefined}
              {...register("password", { 
                required: "Vui lòng nhập bí mật",
                minLength: {
                  value: 6,
                  message: "Bí mật phải có ít nhất 6 ký tự"
                }
              })}
            />
            {errors.password && (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}
          </FormGroup>

          <SubmitButtonWithStatus />
        </Form>

        <BackLink href="/">Quay lại thế giới thực</BackLink>
      </LoginCard>
    </LoginContainer>
  );
}

export default LoginPage;
