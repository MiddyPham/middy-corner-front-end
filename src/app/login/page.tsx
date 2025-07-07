"use client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { loginAction } from "./actions";
import TypingAnimation from "./components/TypingAnimation";
import {
  LoginContainer,
  MatrixRain,
  MatrixColumn,
  ParticleSystem,
  Particle,
  LoginCard,
  LoginHeader,
  LoginSubtitle,
  Form,
  FormGroup,
  Label,
  Input,
  SubmitButton,
  BackLink,
  ErrorMessage,
  BackgroundPattern,
  PatternCircle,
  PatternSquare,
  PatternTriangle,
  PatternLine,
  ScribbleLine,
  CurvedLine,
  ZigzagLine,
  DoodleCircle,
  WavyLine,
} from "./loginStyle";

type FormData = {
  username: string;
  password: string;
};

export default function LoginPage() {
  const router = useRouter();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setServerError("");

    try {
      const formData = new FormData();
      formData.append("username", data.username);
      formData.append("password", data.password);

      const result = await loginAction({ error: "", success: false }, formData);
      
      if (result.success) {
        localStorage.setItem("isLoggedIn", "true");
        router.push("/admin");
      } else {
        setServerError(result.error);
      }
    } catch (error) {
      console.error("Login error:", error);
      setServerError("Có lỗi xảy ra, vui lòng thử lại");
    } finally {
      setIsLoading(false);
    }
  };

  const SubmitButtonWithStatus = () => {
    return (
      <SubmitButton type="submit" disabled={isLoading}>
        {isLoading ? "Đang khởi tạo..." : "Bước vào ảo giác"}
      </SubmitButton>
    );
  };

  const matrixColumns = Array.from({ length: 20 }, (_, i) => (
    <MatrixColumn
      key={i}
      delay={Math.random() * 3}
      left={Math.random() * 100}
    />
  ));

  const particles = Array.from({ length: 15 }, (_, i) => (
    <Particle
      key={i}
      size={Math.random() * 4 + 2}
      x={Math.random() * 100}
      y={Math.random() * 100}
      delay={Math.random() * 3}
    />
  ));

  const backgroundPatterns = [
    // Circles
    ...Array.from({ length: 8 }, (_, i) => (
      <PatternCircle
        key={`circle-${i}`}
        x={Math.random() * 100}
        y={Math.random() * 100}
        size={Math.random() * 20 + 10}
        delay={Math.random() * 3}
      />
    )),
    // Squares
    ...Array.from({ length: 6 }, (_, i) => (
      <PatternSquare
        key={`square-${i}`}
        x={Math.random() * 100}
        y={Math.random() * 100}
        size={Math.random() * 25 + 15}
        delay={Math.random() * 3}
      />
    )),
    // Triangles
    ...Array.from({ length: 4 }, (_, i) => (
      <PatternTriangle
        key={`triangle-${i}`}
        x={Math.random() * 100}
        y={Math.random() * 100}
        size={Math.random() * 30 + 20}
        delay={Math.random() * 3}
      />
    )),
    // Lines
    ...Array.from({ length: 5 }, (_, i) => (
      <PatternLine
        key={`line-${i}`}
        x={Math.random() * 100}
        y={Math.random() * 100}
        width={Math.random() * 40 + 20}
        height={Math.random() * 3 + 2}
        delay={Math.random() * 3}
      />
    )),
    ...Array.from({ length: 7 }, (_, i) => (
      <ScribbleLine
        key={`scribble-${i}`}
        x={Math.random() * 100}
        y={Math.random() * 100}
        width={Math.random() * 50 + 30}
        height={Math.random() * 4 + 2}
        delay={Math.random() * 3}
      />
    )),
    // Curved lines
    ...Array.from({ length: 4 }, (_, i) => (
      <CurvedLine
        key={`curved-${i}`}
        x={Math.random() * 100}
        y={Math.random() * 100}
        size={Math.random() * 40 + 20}
        delay={Math.random() * 3}
      />
    )),
    // Zigzag lines
    ...Array.from({ length: 6 }, (_, i) => (
      <ZigzagLine
        key={`zigzag-${i}`}
        x={Math.random() * 100}
        y={Math.random() * 100}
        width={Math.random() * 60 + 40}
        height={Math.random() * 4 + 2}
        delay={Math.random() * 3}
      />
    )),
    // Doodle circles
    ...Array.from({ length: 5 }, (_, i) => (
      <DoodleCircle
        key={`doodle-${i}`}
        x={Math.random() * 100}
        y={Math.random() * 100}
        size={Math.random() * 35 + 20}
        delay={Math.random() * 3}
      />
    )),
    // Wavy lines
    ...Array.from({ length: 4 }, (_, i) => (
      <WavyLine
        key={`wavy-${i}`}
        x={Math.random() * 100}
        y={Math.random() * 100}
        width={Math.random() * 70 + 50}
        height={Math.random() * 3 + 2}
        delay={Math.random() * 3}
      />
    )),
  ];

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
            <Label htmlFor="username">Mật danh</Label>
            <Input
              type="text"
              id="username"
              placeholder="Nhập mật danh để vào cửa"
              className={errors.username ? "error" : ""}
              aria-describedby={serverError || errors.username ? "error-message" : undefined}
              {...register("username", { 
                required: "Vui lòng nhập mật danh",
                minLength: {
                  value: 3,
                  message: "Mật danh phải có ít nhất 3 ký tự"
                }
              })}
            />
            {errors.username && (
              <ErrorMessage>{errors.username.message}</ErrorMessage>
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
