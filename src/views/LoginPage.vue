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

const login = async () => {
  const data = await api.login(userInput)

  if (data.success) {
    //로그인
    alert('로그인 성공')

    //메인 페이지 이동
    window.location.href = '/';

  } else {
    alert('로그인 실패')
  }
}
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">로그인</div>
          <div class="card-body">
            <form @submit.prevent="login">
              <div class="mb-3">
                <label class="form-label">이메일</label>
                <input v-model="userInput.email" type="email" class="form-control" required />
              </div>
              <div class="mb-3">
                <label class="form-label">비밀번호</label>
                <input v-model="userInput.password" type="password" class="form-control" required />
              </div>
              <button type="submit" class="btn btn-success w-100">로그인zz</button>
            </form>
            <p class="mt-3 text-center">
              계정이 없으신가요? <router-link to="/user/signup">회원 가입</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>