export default function Header (props) {
    return (
        <>
        <header>
            <picture>
            <source media="(max-width: 415px)" srcSet="img/banner(415).png" />
            <source media="(max-width: 633px)" srcSet="img/banner(633).png" />
            <img
                src="img/banner.gif"
                style={{ maxWidth: "100%", height: "auto" }}
                alt="Banner pet rescue"
            />
            </picture>
        </header>
    </>
    )
}