import React from 'react'
import Link from 'next/link'
import {
  NotFoundContainer,
  NotFoundContent,
  NotFoundIcon,
  NotFoundTitle,
  NotFoundSubtitle,
  NotFoundDescription,
  NotFoundButton,
} from './notFoundStyle'

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundContent>
        <NotFoundIcon />
        <NotFoundTitle>404</NotFoundTitle>
        <NotFoundSubtitle>Oops! Trang không tìm thấy</NotFoundSubtitle>
        <NotFoundDescription>
          Có vẻ như bạn đã đi lạc vào một thế giới không tồn tại. 
          Hãy quay lại trang chủ để tiếp tục khám phá!
        </NotFoundDescription>
        <Link href="/">
          <NotFoundButton>Quay về trang chủ</NotFoundButton>
        </Link>
      </NotFoundContent>
    </NotFoundContainer>
  )
}

export default NotFound
