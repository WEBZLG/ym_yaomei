// 按需全局引入 vant组件
import Vue from 'vue'
import {Radio,RadioGroup,Loading,Lazyload,NavBar,Button,Toast,Field, List,  Cell, CellGroup, Tabbar, TabbarItem,Image as VanImage, Tab, Tabs} from 'vant'
Vue.use(Button)
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
Vue.use(RadioGroup);
Vue.use(Tabbar).use(TabbarItem)
