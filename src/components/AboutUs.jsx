import "../styles/AboutUs.css"

function AboutUs() {

    return(
        <>
            <div className="container">
                <div className="about-us">
                    <span>Кто мы?</span>
                    <div className="about-us-info">
                        <div className="info-item1 info-item">
                            {/* <p className="info-title">Продукция</p> */}
                            <p className="info-text">Наши стеклянные чашки – это больше, чем просто посуда, это воплощение утонченного вкуса. Созданные с предельной точностью, каждое изделие представляет собой гармоничное сочетание формы и функциональности.</p>
                        </div>
                        <div className="info-item2 info-item">
                            {/* <p className="info-title">Команда</p> */}
                            <p className="info-text">Повысьте уровень своих повседневных ритуалов с нашей коллекцией изысканной стеклянной посуды.</p>
                        </div>
                        <div className="info-item3 info-item">
                            <p className="info-text">Превратите каждый момент в особенный. Наши стеклянные стаканы добавят изюминку в вашу повседневную жизнь.</p>
                        </div>
                        <div className="info-item4 info-item">
                            <p className="info-text">Наслаждайтесь любимыми напитками в окружении красоты и элегантности.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs