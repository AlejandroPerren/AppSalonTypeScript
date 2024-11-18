const backendDomain:any = import.meta.env.VITE_backendDomain;

const SummaryApi = {
    SignUp : {
        url: `${backendDomain}/api/auth/signup`,
        method: `post`
    },
    Login : {
        url: `${backendDomain}/api/auth/login`,
        method: `post`
    },
    GetServices : {
        url: `${backendDomain}/api/services/getServices`,
        method: `get`
    },
    CreateService : {
        url: `${backendDomain}/api/services/createService`,
        method: `post`
    },
    UpdateService : {
        url: `${backendDomain}/api/services/updateService`,
        method: `patch`
    },
    DeleteService : {
        url: `${backendDomain}/api/services/deleteService`,
        method: `delete`
    },
    GetDates : {
        url: `${backendDomain}/api/services/getDates`,
        method: `get`
    },
    CreateDates : {
        url: `${backendDomain}/api/services/createDates`,
        method: `post`
    },
    UpdateDates : {
        url: `${backendDomain}/api/services/updateDates`,
        method: `patch`
    },
}




export default SummaryApi;