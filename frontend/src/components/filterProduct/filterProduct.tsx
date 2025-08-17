import styles from "./filterProduct.module.scss"
const FilterProduct = () => {
   return (
      <aside className={styles.layout}>
         <div className={styles.container}>
            <div className={styles.wrapper}>
               <div>Фильтр</div>
               <div>Цена</div>
               <div>Взрослый или детский</div>
               <div>Дальность хода</div>
               <div>Применить</div>
               <div>Сбросить</div>
            </div>
         </div>
      </aside>
   );
}

export default FilterProduct;