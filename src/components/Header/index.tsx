import { SearchInput } from '../Search-input'
import style from './style.module.css'


export const Header = () => {

    return (
        <div className={style.header}>
            <div className={style.logo}>GameSpace</div>
            <SearchInput />
            <div className={style.authorization}>Авторизоваться</div>
        </div>
    )
}