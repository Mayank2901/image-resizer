import FourOFour from './404'
import ImageUploader from './components/ImageUploader'

const routes = [
    {
        path: '/',
        component: ImageUploader
    },
    {
        component: FourOFour
    }
]

export default routes