<script setup>
import api from '../api'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

//라우터 정보 객체
const router = useRouter()
const userInput = reactive({
  email: '', //이메일(아이디)
  password: '', //비밀번호
})

const signup = async () => {
  const data = await api.signup(userInput)

  if (data.success) {
    //회원 가입
    alert('가입 성공')

    //로그인인 페이지 이동
    window.location.href = '/user/login';


  } else {
    alert('가입 실패')
  }
}
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">회원 가입</div>
          <div class="card-body">
            <form @submit.prevent="signup">
              <div class="mb-3">
                <label class="form-label">이메일</label>
                <input v-model="userInput.email" type="email" class="form-control" required />
              </div>
              <div class="mb-3">
                <label class="form-label">비밀번호</label>
                <input v-model="userInput.password" type="password" class="form-control" required />
              </div>
              <div class="mb-3">
                <label class="form-label">비밀번호 확인</label>
                <input v-model="confirmPassword" type="password" class="form-control" required />
              </div>
              <button type="submit" class="btn btn-primary w-100">가입하기</button>
            </form>
            <p class="mt-3 text-center">
              이미 계정이 있으신가요? <router-link to="/user/login">로그인</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
