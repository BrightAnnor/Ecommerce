const index = (req,res)=>{
    res.render('pages/admin/pages/index')
};
const ViewLogin = (req,res)=>{
    res.render('pages/admin/pages/login',{layout:'pages/admin/layouts/other'})
};



module.exports = {
    index,
    ViewLogin
}