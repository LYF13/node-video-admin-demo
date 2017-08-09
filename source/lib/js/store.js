
let Store = {
    state:{
        hostname:location.hostname,
        isOnline:location.hostname == 'h5.xinpianchang.com',
        comments:0,
        baseUrl:'http://www.xinpianchang.com',
        loginUrl:'',
        LoginUserId: 0,
        windowHeight:$(window).height(),   //window的高度
        domain: 'http://oiky1wrat.bkt.clouddn.com/'
    },
    getters: {
        windowHeight: state => {
            return state.windowHeight = $(window).height();
        },
        baseUrl: state => {
            switch (state.hostname){
                case 'node.cbw.xinpianchang.com':
                    return state.baseUrl = 'http://openapi-vtom.test.vmovier.com';
                default:
                    return state.baseUrl = 'http://openapi-vtom.vmovier.com'
            }
        },
        loginUrl: (state,getters) => {

            return state.loginUrl = getters.baseUrl + '/index.php?app=user&ac=login&callback=' + encodeURIComponent(location.href);

        },

        routePath: state => {

            return state.isOnline ? '' : '/View';

        }
    },
    mutations:{
        loginState (state,LoginUserId) {
            state.LoginUserId = LoginUserId;
        },

        downloadShow (state) {
          state.download = 1;
        },
        
        sendMsg (state,userid){

            if(state.LoginUserId){

                location.href = state.baseUrl + '/user/message/ts-add/touserid-' + userid;

            }else{

                location.href = state.baseUrl + '/user/mcard/ts-mcard_form/id-' + userid;
    
                
                
            }

        },

        commentsShow (state) {
          state.comments = 1
        }
    }
}

export default Store;
