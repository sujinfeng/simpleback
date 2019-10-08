import Vue from 'vue'
import {
  Button,
  Input,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Container,
  Menu,
  Submenu,
  MenuItem,
  Header,
  Aside,
  Tooltip,
  Main,
  Dialog,
  Loading,
  MessageBox
} from 'element-ui'

Vue.use(Button)
  .use(Input)
  .use(Dropdown)
  .use(DropdownMenu)
  .use(DropdownItem)
  .use(Container)
  .use(Menu)
  .use(Submenu)
  .use(MenuItem)
  .use(Header)
  .use(Aside)
  .use(Tooltip)
  .use(Main)
  .use(Dialog)
  
  
Vue.use(Loading.directive);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
