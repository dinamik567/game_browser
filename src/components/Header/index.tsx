import style from './style.module.css';

export const Header = () => {

    return (
        <div className={style.header}>
            <div className={style.logo}>GameSpace</div>
            <div className={style.authorization}>Авторизоваться</div>
        </div>
    )
}