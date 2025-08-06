import { useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
  MatrixColumn,
  Particle,
  PatternCircle,
  PatternSquare,
  PatternTriangle,
  PatternLine,
  ScribbleLine,
  CurvedLine,
  ZigzagLine,
  DoodleCircle,
  WavyLine,
  SubmitButton,
} from "./loginStyle";
import { authService } from "../api/auth";
import { useMutation } from "@tanstack/react-query";
import { setCookie } from "cookies-next";
import LocalStorageUtil, { LOCAL_KEY } from "@/utils/LocalStorageUtil";
import { useRouter } from "next/navigation";
import { TypeUserResponse } from "@/constant/types";
import { ROUTERS } from "@/constant/routers";

type FormData = {
  email: string;
  password: string;
};

export const useLogin = () => {
  const router = useRouter();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const loginMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await authService.login(data.email, data.password);
      return response;
    },
    onSuccess: (data: TypeUserResponse) => {
      setCookie('accessToken', data.access_token);
      setCookie('refreshToken', data.refresh_token);
      LocalStorageUtil.setItemObject(LOCAL_KEY.USER, data.user);
      setIsLoading(false);
      if (data.user.role === 'admin') {
        router.push(ROUTERS.ADMIN);
      } else {
        router.push(ROUTERS.HOME);
      }
    },
    onError: () => {
      setIsLoading(false);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    setIsLoading(true);
    setServerError("");
    
    loginMutation.mutate(data);
  };

  const SubmitButtonWithStatus = () => {
    return (
      <SubmitButton type="submit" disabled={isLoading}>
        {isLoading ? "Đang khởi tạo..." : "Bước vào ảo giác"}
      </SubmitButton>
    );
  };

  const matrixColumns = useMemo(() => Array.from({ length: 20 }, (_, i) => {
    const delay = Math.random() * 3;
    const left = Math.random() * 100;
    return (
      <MatrixColumn
        key={i}
        delay={delay}
        left={left}
      />
    );
  }), []);

  const particles = useMemo(() => Array.from({ length: 15 }, (_, i) => (
    <Particle
      key={i}
      size={Math.random() * 4 + 2}
      x={Math.random() * 100}
      y={Math.random() * 100}
      delay={Math.random() * 3}
    />
  )), []);

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

  return {
    cardRef,
    isLoading,
    serverError,
    register,
    handleSubmit,
    errors,
    onSubmit,
    SubmitButtonWithStatus,
    matrixColumns,
    particles,
    backgroundPatterns,
  };
};
