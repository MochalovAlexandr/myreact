/*eslint no-unused-vars: "error"*/
/* exported global_var */
import s from './Rules.module.css';


export const Rules = () => {
  return (
    <div className={s.rules}>
      <h2 className={s.title}>Ура! Теперь можно начать работать:</h2>
      <ul>
        <li className={s.item}><span className={s.itemspan}>Выберите категорию и напишите название текущей задачи</span></li>
        <li className={s.item}><span className={s.itemspan}>Запустите таймер (&quot;помидор&quot;)</span></li>
        <li className={s.item}><span className={s.itemspan}>Работайте пока &quot;помидор&quot; не позвонит</span></li>
        <li className={s.item}><span className={s.itemspan}>Сделайте короткий перерыв (3-5 минут)</span></li>
        <li className={s.item}><span className={s.itemspan}>Продолжайте работать &quot;помидор&quot; за
            &quot;помидором&quot;, пока задача не будет выполнена.
            Каждые 4 &quot;помидора&quot; делайте длинный перерыв (15-30 минут).</span>
        </li>
      </ul>
      
    </div>
  );
}


