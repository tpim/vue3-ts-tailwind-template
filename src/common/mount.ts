import {createApp, h} from "vue";
import ILoadingComponent from "@/components/ILoading.vue";
import IToastComponent from "@/components/IToast.vue";

export const ILoading = (() => {
    const div = document.createElement("div")
    document.body.appendChild(div)

    const app = createApp({
        render() {
            return h(ILoadingComponent)
        },
    })
    return {
        start: ()=>{
            app.mount(div)
        },
        stop: ()=>{
            app.unmount()
            document.body.removeChild(div)
        }
    }
})()


interface ToastParams{
    msg:String,
    duration?:number
}

export const IToast = ((data:ToastParams) => {
    const { msg, duration = 1000 } = data;
    const div = document.createElement("div")
    document.body.appendChild(div)

    const app = createApp({
        render() {
            return h(IToastComponent,{msg})
        },
    })
    app.mount(div)
    setTimeout(() =>{
        app.unmount()
        document.body.removeChild(div)
    },duration)
})
