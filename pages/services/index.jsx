import styles from "./Services.module.scss";

const Services = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
          <div className={styles.title}>
              <h2>Отказ от услуги</h2>
            </div>
          
            <span className={styles.text}>
          Право потребителя на расторжение договора об оказании услуги регламентируется статьей 32 федерального закона «О защите прав потребителей»</span>
          <ol className={styles.ol}> 
              <li>Потребитель вправе расторгнуть договор об оказании услуги в любое время, уплатив исполнителю часть цены пропорционально части оказанной услуги до получения извещения о расторжении указанного договора и возместив исполнителю расходы, произведенные им до этого момента в целях исполнения договора, если они не входят в указанную часть цены услуги;
 </li>
              <li>Потребитель при обнаружении недостатков оказанной услуги вправе по своему выбору потребовать:
                <ul className={styles.ul}>
                  <li>безвозмездного устранения недостатков;</li>
                  <li> соответствующего уменьшения цены;</li>
                  <li>возмещения понесенных им расходов по устранению недостатков своими силами или третьими лицами;</li>
                  </ul> 
                  </li>
              <li>Потребитель вправе предъявлять требования, связанные с недостатками оказанной услуги, если они обнаружены в течение гарантийного срока, а при его отсутствии в разумный срок, в пределах двух лет со дня принятия оказанной услуги; </li>
              <li>Исполнитель отвечает за недостатки услуги, на которую не установлен гарантийный срок, если потребитель докажет, что они возникли до ее принятия им или по причинам, возникшим до этого момента; </li>
            </ol>
          
           
        </div>
         </div>
   );
};

export default Services;
