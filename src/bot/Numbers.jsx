import './css.css'
import {useTranslation} from "react-i18next";


export default function Numbers() {

    const {t} = useTranslation()

  return (
    <div className='numbers'>
      <h2>NOMAD PEAKS {t('numbers')}</h2>
      <div className="numbers__flex">
        <div className="numbers__flex-items">
            <h1>5000+</h1>
            <p>{t('numbers_title_1')}</p>
        </div>
        <div className="numbers__flex-items">
            <h1>16+</h1>
            <p>{t('numbers_title_2')}</p>
        </div>
        <div className="numbers__flex-items">
            <h1>22</h1>
            <p>{t('numbers_title_3')}</p>
        </div>
      </div>
    </div>
  )
}
