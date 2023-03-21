console.log(1)
setTimeout(()=>{console.log(2),1000})
console.log(3)
function printImmediately(print){
  print();
}

printImmediately(()=>{
  console.log('hello')
})

function printWithDelay(print,timeout){
  setTimeout(print,timeout);
}
printWithDelay(()=>[console.log('비동기 콜백'),2000])

class UserStorage {
  loginUser(id, password, onSuccess, onError){
    setTimeout(()=>{
      if(
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ){
        onSuccess(id)
      } else{
        onError(new Error('not found'))
      }
    },2000)
  }

  getRoles(user, onSuccess, onError){
    setTimeout(()=>{
      if(user === 'ellie'){
        onSuccess({name: 'ellie', role:'admin'})
      }else{
        onError(new Error('no access'))
      }
    }, 1000)
  }
}

const userStorage = new UserStorage()
const id = prompt('아이디 입력하세요')
const password = prompt('패스워드를 입력하세요')
userStorage.loginUser(id, password, (user)=>{
  userStorage.getRoles(user, (userWithRole)=>{
    alert('안녕'+userWithRole.name+'너의 권한은'+userWithRole.role+'입니다')
  },(error)=>{
    console.log(error)
  })
}, (error)=>{
  console.log(error)
})