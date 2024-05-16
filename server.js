const express = require('express')
const app = express()

tasks = []

app.set('view-engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
	res.render('index.ejs', tasks)
})

app.post('/', (req, res) => {
	try{
		tasks.push(req.body.task)
		console.log(tasks)
		res.redirect('/')
	}catch{
		res.redirect('/')
		console.log("caught error")
	}
})

app.listen(3000)