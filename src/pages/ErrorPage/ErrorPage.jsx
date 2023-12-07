import notFound from "../../assets/404.png"
const ErrorPage = () => {

    return (
        <div className="error-page-container">
            <img src={notFound} style={{ width: '100%' }} />
        </div>
    )

}

export default ErrorPage