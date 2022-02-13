import {
  DashboardOutlined,
  AppstoreOutlined,
  ShopOutlined,
  GiftOutlined,
  PictureOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  UsergroupDeleteOutlined,
  MailOutlined,
  SettingOutlined,
  MobileOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { APP_PREFIX_PATH } from "configs/AppConfig";

const dashBoardNavTree = [
  {
    key: "apps-mail",
    path: `${APP_PREFIX_PATH}/dashboards/sales`,
    title: "Основные",
    icon: ShoppingCartOutlined,
    breadcrumb: true,
    submenu: [
      {
        key: "dashboards-default",
        path: `${APP_PREFIX_PATH}/dashboards/default`,
        title: "Дашборд",
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },

      {
        key: "cataloge",
        path: `${APP_PREFIX_PATH}/dashboards/sales`,
        title: "Каталог",
        icon: ShoppingCartOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: "products",
            path: `${APP_PREFIX_PATH}/apps/mail/inbox`,
            title: "Товары",

            breadcrumb: false,
            submenu: [],
          },
          {
            key: "categories",
            path: `${APP_PREFIX_PATH}/apps/chat`,
            title: "Категории",

            breadcrumb: false,
            submenu: [],
          },
          {
            key: "colections",
            path: `${APP_PREFIX_PATH}/apps/calendar`,
            title: "Коллекции",

            breadcrumb: false,
            submenu: [],
          },
          {
            key: "combo",
            path: `${APP_PREFIX_PATH}/apps/project`,
            title: "Комбо",

            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: "books",
        path: `${APP_PREFIX_PATH}/apps`,
        title: "Заказы",
        icon: AppstoreOutlined,
        breadcrumb: false,
        submenu: [],
      },

      {
        key: "customers",
        path: `${APP_PREFIX_PATH}/apps`,
        title: "Клиенты",
        icon: UserOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: "customers-list",
            path: `${APP_PREFIX_PATH}/pages/user-list`,
            title: "Список клиентов",

            breadcrumb: false,
            submenu: [],
          },
          {
            key: "customers-group",
            path: `${APP_PREFIX_PATH}/apps`,
            title: "Группы клиентов",

            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: "banners",
        path: `${APP_PREFIX_PATH}/apps`,
        title: "Баннеры",
        icon: PictureOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "promocodes",
        path: `${APP_PREFIX_PATH}/apps`,
        title: "Промокоды",
        icon: GiftOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "offline",
        path: `${APP_PREFIX_PATH}/apps`,
        title: "Оффлайн точки",
        icon: ShopOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: "address",
            path: `${APP_PREFIX_PATH}/apps`,
            title: "Адреса",

            breadcrumb: false,
            submenu: [],
          },
          {
            key: "geozones",
            path: `${APP_PREFIX_PATH}/apps`,
            title: "Геозоны",

            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: "workers",
        path: `${APP_PREFIX_PATH}/apps`,
        title: "Сотрудники",
        icon: UsergroupDeleteOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "mailing",
        path: `${APP_PREFIX_PATH}/apps`,
        title: "Рассылка",
        icon: MailOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const componentsNavTree = [
  {
    key: "system",
    path: `${APP_PREFIX_PATH}/dashboards/sales`,
    title: "Системные",
    icon: ShoppingCartOutlined,
    breadcrumb: true,
    submenu: [
      {
        key: "settings",
        path: `${APP_PREFIX_PATH}/apps/mail/inbox`,
        title: "Настройки",
        icon: SettingOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "mobile-apps",
        path: `${APP_PREFIX_PATH}/apps/chat`,
        title: "Мобильное приложения",
        icon: MobileOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "logs",
        path: `${APP_PREFIX_PATH}/apps/calendar`,
        title: "Логи",
        icon: FileTextOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const navigationConfig = [...dashBoardNavTree, ...componentsNavTree];
export default navigationConfig;
