import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('../views/Home.vue');
const EventCreation = () => import('../views/EventCreation.vue');

const EventDetailPage = () => import('../views/EventDetailPage.vue');
const NotFound = () => import('../views/NotFound.vue');
const UserProfile = () => import ('../views/UserProfile.vue');
const EditProfile = () => import ('../views/EditProfile.vue');
const AgentManagement = () => import ('../views/AgentManagement.vue');
const BookingPayment = () => import ('../views/BookingPayment.vue');
const EticketConfirmation = () => import ('../views/EticketConfirmation.vue');
const Setting  = () => import ('../views/Setting.vue');
const EventTourismDetails = () => import ('../views/EventTourismDetails.vue');

const MessagingSytem = () => import ('../views/MessagingSytem.vue');
const OrganizerProfile = () => import ('../views/OrganizerProfile.vue');
const OrganizerDashboard = () => import ('../views/OrganizerDashboard.vue');
const ScanHistory = () => import ('../views/ScanHistory.vue');
const Scan = () => import ('../views/Scan.vue');
const DetailedReports = () => import ('../views/DetailedReports.vue');
const Event = () => import ('../views/Event.vue');
const CreateOrganizer = () => import ('../views/CreateOrganizer.vue');
const EditOrganizer = () => import ('../views/EditOrganizer.vue');

const routes = [
  {
    path: '/',
    component: Home, 
  },

  {
    path: '/devenir-orgainsateur',
    name: 'CreateOrganizer',
    component: CreateOrganizer, 
  },



  {
    path: '/edit-organiser',
    name: 'EditOrganizer',
    component: EditOrganizer, 
  },

  {
    path: '/payment',
    name: 'BookingPayment',
    component: BookingPayment,  // La page de détails
  },

  {
    path: '/events',
    name: 'Event',
    component: Event,  // La page de détails
  },


  {
    path: '/confirmation',
    name: 'EticketConfirmation',
    component: EticketConfirmation,  // La page de détails
  },


  {
    path: '/create-event',
    name: 'EventCreation',
    component: EventCreation,  // La page de détails
  },



  {
    path: '/agent-management',
    name: 'AgentManagement',
    component: AgentManagement,  // La page de détails
  },

  {
    path: '/report',
    name: 'DetailedReports',
    component: DetailedReports,  // La page de détails
  },


  {
    path: '/profile',
    name: 'UserProfile',
    component: UserProfile,
  },
  {
    path: '/edit-profile',
    name: 'EditProfile',
    component: EditProfile,  // La page de détails
  },

  {
    path: '/profile-organizer',
    name: 'OrganizerProfile',
    component: OrganizerProfile,  // La page de détails
  },



  {
    path: '/scan',
    name: 'Scan',
    component: Scan,  // La page de détails
  },

  {
    path: '/scan-history',
    name: 'ScanHistory',
    component: ScanHistory,  // La page de détails
  },


  {
    path: '/edit-organizer',
    name: 'OrganizerDashboard',
    component: OrganizerDashboard,  // La page de détails
  },
  
  {
    path: '/setting',
    name: 'Setting',
    component: Setting,  // La page de détails
  },


  {
    path: '/tourism',
    name: 'EventTourismDetails',
    component: EventTourismDetails,  // La page de détails
  },


  {
    path: '/event/detail',
    name: 'EventDetailPage',
    component: EventDetailPage,  // La page de détails
  },
  
  {
    path: '/messages',
    name: 'MessagingSytem',
    component: MessagingSytem,  // La page de détails
  },
  
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,  // Page non trouvée
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
