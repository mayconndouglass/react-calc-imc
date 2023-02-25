import { Level } from '../../helpers/imc'
import styles from './GridItem.module.css'
import upImage from '../../assets/up.png'
import downImage from '../../assets/down.png'

type Props = {
  item: Level
}

export const GridItem = ({ item }: Props) => {
  const { imc, color, icon, title, yourImc } = item
  
  return (
    <div className={styles.main} style={{ backgroundColor: color }}>
      <div className={styles.gridIcon}>
        {icon === 'up' && <img src={upImage} alt='' width='30' />}
        {icon === 'down' && <img src={downImage} alt='' width='30' />}
      </div>
      <div className={styles.gridTitle}>{title}</div>
      {yourImc &&
        <div className={styles.yourImc}>
          Seu IMC é de {yourImc} Kg/m²
        </div>
      }

      <div className={styles.gridInfo}>
        <>
          IMC está entre <strong>{imc[0]}</strong> e <strong>{imc[1]}</strong>
        </>
      </div>
    </div>
  )
}