function getSingnup(req,res){
    res.render('customer/auth/signup');
}

function getLogin(req,res){
    //
}

module.exports = {
    getSingnup:getSingnup,
    getLogin:getLogin
};