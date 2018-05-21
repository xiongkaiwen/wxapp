
var testDomainUrl = "http://183.6.116.153:10288/la/"
var domainUrl = "http://www.isp-cn.com/app/"
// var payUrl = "http://192.168.0.102:8103/"
var payUrl = "http://pay.jxblot.com/"
module.exports={
	//支付
	userAuth: payUrl + "pay/auth",// 鉴权
  //地址列表
  //输入参数	parentId：父ID
  areaList: domainUrl +"areas/listQuery",
}