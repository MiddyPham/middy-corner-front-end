'use server'

type State = {
  error: string;
  success: boolean;
}

const listMessagesErrors = [
  'Định lừa ai hả???',
  'Định bịp tiếp à???',
  'Nói thật đi, vào đây làm gì???',
  "Á à, lại sai nữa??",
  "._.?",
  "Lại sai nữa à??",
  "Sai lần nữa gõ đầu?",
  "Không vào được đâu, đừng cố??",
  "Có ý định gì hả???",
  "Mệt thật? Lại sai nữa à??",
  "Bàn phím hư nút ấn à??",
  "Quên chưa bật sang tiếng anh kìa??"
]

export async function loginAction(prevState: State, formData: FormData): Promise<State> {
  const username = formData.get('username') as string
  const password = formData.get('password') as string

  // Validation
  if (!username || !password) {
    return {
      error: 'Nhập đi thì mới vào được chứ??? ._.',
      success: false
    }
  }

  // Simulate server delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  if (username === 'admin' && password === 'admin123') {
    // In a real app, you would set a session or JWT token here
    // For demo purposes, we'll use localStorage on the client side
    return {
      error: '',
      success: true
    }
  } else {
    return {
      error: listMessagesErrors[Math.floor(Math.random() * listMessagesErrors.length)],
      success: false
    }
  }
} 