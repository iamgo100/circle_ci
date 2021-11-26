for (let i=3; i<8; i++){
    let el = document.getElementById(i.toString())
    el.innerHTML = `<a href='https://github.com/iamgo100/python-course/tree/master/Sem${i}'>${i} семестр</a>`
    el.addEventListener('click', () => {
        document.location = `https://github.com/iamgo100/python-course/tree/master/Sem${i}`
    })
}