// 按需全局引入 vant组件
import Vue from 'vue'
import {Dialog,PullRefresh,Uploader,Stepper,Swipe,SwipeItem,Checkbox, CheckboxGroup,Popup,Area,Picker,Overlay,Radio,RadioGroup,Loading,Lazyload,NavBar,Button,Toast,Field, List,  Cell, CellGroup, Tabbar, TabbarItem,Image as VanImage, Tab, Tabs} from 'vant'
Vue.use(Button)
Vue.use(Dialog);
Vue.use(Cell)
Vue.use(List)
Vue.use(Tab);
Vue.use(Toast);
Vue.use(Tabs);
Vue.use(NavBar);
Vue.use(VanImage);
Vue.use(CellGroup);
Vue.use(Field);
Vue.use(Lazyload);
Vue.use(Loading);
Vue.use(Radio);
Vue.use(Overlay);
Vue.use(Picker);
Vue.use(Area);
Vue.use(Popup);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(RadioGroup);
Vue.use(Swipe);
Vue.use(Stepper);
Vue.use(SwipeItem);
Vue.use(Uploader);
Vue.use(PullRefresh);
Vue.use(Tabbar).use(TabbarItem);
