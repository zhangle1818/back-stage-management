<template>
  <div class="login">
    <div class="big"></div>
    <Card style="width:350px">
      <p slot="title">
        <Icon type="logo-designernews"></Icon>
        后台管理系统
      </p>
      <Form
        ref="formInline"
        :model="formInline"
        :rules="ruleInline"
      >
        <FormItem prop="user">
          <Input
            type="text"
            v-model="formInline.user"
            placeholder="Username"
          >
          <Icon
            type="ios-person-outline"
            slot="prefix"
          ></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input
            type="password"
            v-model="formInline.password"
            placeholder="Password"
          >
          <Icon
            type="ios-lock-outline"
            slot="prefix"
          ></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            @click="handleSubmit('formInline')"
          >登陆</Button>
          <Button
            @click="handleReset('formInline')"
            style="margin-left: 8px"
          >重置</Button>
        </FormItem>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formInline: {
        user: 'admin',
        password: '123456'
      },
      ruleInline: {
        user: [
          { required: true, message: '请填写用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请填写密码.', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码的长度不能小于6', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
        // 发起请求获取获取登陆的数据
          this.$axios({
            url: '/admin/account/login',
            method: 'POST',
            data: {
              uname: this.formInline.user,
              upwd: this.formInline.password
            }
          }).then(result => {
            console.log(result)
            /** 判断如果登陆成功:1.将用户的信息保存到本地2.跳转到admin页面 */
            if (result.data.status === 0) {
              localStorage.setItem('userInfo', JSON.stringify(result.data.message))
              this.$router.push('/admin')
              this.$Message.success('登陆成功')
            } else {
              this.$Message.success('登陆失败')
            }
          })
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    }
  }
}
</script>

<style scopcd lang="less">
.login {
  height: 100%;
  position: relative;
  overflow: hidden;
  > .big {
    width: 100%;
    height: 100%;
    position: absolute;
    background: url(../assets/1.jpg) no-repeat center;
    background-size: cover;
    // transform: scale(1.02)
  }
  > .ivu-card {
    position: absolute;
    top: 66px;
    right: 450px;
  }
}
</style>
