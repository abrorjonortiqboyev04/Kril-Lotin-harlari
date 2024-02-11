const {Router}=require('express')

const router=Router()

const lotinKril = (a) =>{
    const result=[]
    let sum=''
    const lotin=a.split('')
    lotin.forEach(txt => {
        if(txt==='a')  result.push('а')
        else if(txt==='w')  result.push('ш')
        else if(txt==='b')  result.push('б')
        else if(txt==='d')  result.push('д')
        else if(txt==='e')  result.push('э')
        else if(txt==='f')  result.push('ф')
        else if(txt==='g')  result.push('г')
        else if(txt==='h')  result.push('х')
        else if(txt==='i')  result.push('и')
        else if(txt==='j')  result.push('ж')
        else if(txt==='k')  result.push('к')
        else if(txt==='l')  result.push('л')
        else if(txt==='m')  result.push('м')
        else if(txt==='n')  result.push('н')
        else if(txt==='o')  result.push('о')
        else if(txt==='p')  result.push('п')
        else if(txt==='q')  result.push('к')
        else if(txt==='r')  result.push('р')
        else if(txt==='s')  result.push('с')
        else if(txt==='t')  result.push('т')
        else if(txt==='u')  result.push('у')
        else if(txt==='v')  result.push('в')
        else if(txt==='x')  result.push('х')
        else if(txt==='y')  result.push('й')
        else if(txt==='z')  result.push('з')
        else if(txt==="A")  result.push('А')
        else if(txt==="B")  result.push('Б')
        else if(txt==='D')  result.push('Д')
        else if(txt==='E')  result.push('Э')
        else if(txt==='F')  result.push('Ф')
        else if(txt==='G')  result.push('Г')
        else if(txt==='H')  result.push('Х')
        else if(txt==='I')  result.push('И')
        else if(txt==='J')  result.push('Ж')
        else if(txt==='K')  result.push('К')
        else if(txt==='L')  result.push('Л')
        else if(txt==='M')  result.push('М')
        else if(txt==='N')  result.push('Н')
        else if(txt==='O')  result.push('О')
        else if(txt==='P')  result.push('П')
        else if(txt==='Q')  result.push('К')
        else if(txt==='R')  result.push('Р')
        else if(txt==='S')  result.push('С')
        else if(txt==='T')  result.push('Т')
        else if(txt==='U')  result.push('У')
        else if(txt==='V')  result.push('В')
        else if(txt==='X')  result.push('Х')
        else if(txt==='Y')  result.push('Й')
        else if(txt==='Z')  result.push('З')
        else if(txt===' ')  result.push(' ')
        else if(txt==='.')  result.push('.')
        else if(txt===':')  result.push(':')
        else if(txt===';')  result.push(';')
        else if(txt==="'")  result.push("'")
        else if(txt==='|')  result.push('|')
        else if(txt==='!')  result.push('!')
        else if(txt==='?')  result.push('?')
        
    });
    result.forEach(a=> sum+=a)
    return sum
} 

router.get('/',(req, res)=>{
    res.render('home',{
        title: 'Bosh sahifa'
    })
})

router.post('/lotin',(req,res)=>{ 
    const a=lotinKril(req.body.text)
    res.render('home',{
        title: 'Bosh sahifa',
        text: req.body.text,
        kril: a
    })
})

module.exports=router