var mesero_control= () => {};


mesero_control.nuevo=(req,res)=>{
    
    res.status(200).send({mensaje:req.params.mensaje});
    
};

module.exports=mesero_control;