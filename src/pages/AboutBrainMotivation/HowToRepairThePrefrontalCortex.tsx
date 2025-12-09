// Библиотека для отслеживания видимости элементов
import { InView } from "react-intersection-observer";

export const HowToRepairThePrefrontalCortex = () => {
  const styles = {
    container: "max-w-3xl mx-auto px-4 py-8 md:py-12",
    list: "space-y-10 md:space-y-12",
    listItem: (inView: boolean) =>
      `transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`,
    stageContainer: "mb-6",
    h3: "text-2xl md:text-3xl font-bold text-white mb-3 drop-shadow-lg",
    span: "text-lg text-gray-200 leading-relaxed block drop-shadow",
    subsectionContainer: "space-y-6",
    h4: "text-xl font-semibold text-gray-100 mb-3 drop-shadow",
    pContainer:
      "text-gray-200 leading-relaxed pl-4 border-l-2 border-blue-300/70 drop-shadow-sm",
    firstWord: "font-medium text-white drop-shadow",
    innerList: "space-y-4",
  };

  const highlightFirstWord = (text: string) => {
    const wordsArr = text.split(" ");
    const firstWord = wordsArr[0];
    const restOfText = wordsArr.slice(1).join(" ");

    return (
      <>
        <span className={styles.firstWord}>{firstWord}</span> {restOfText}
      </>
    );
  };

  return (
    <main className={styles.container}>
      <ul className={styles.list}>
        <InView triggerOnce threshold={0.3}>
          {({ inView, ref }) => (
            <li ref={ref} className={styles.listItem(inView)}>
              <div className={styles.stageContainer}>
                <h3 className={styles.h3}>
                  Этап 1: Устранение "дебаффов" — снятие нагрузки с мозга
                </h3>
                <span className={styles.span}>
                  Этот этап направлен на освобождение ресурсов вашей
                  префронтальной коры, которые тратятся на фоновые процессы.
                </span>
              </div>

              <div className={styles.subsectionContainer}>
                <div>
                  <h4 className={styles.h4}>
                    Работа с незавершёнными задачами:
                  </h4>
                  <p className={styles.pContainer}>
                    {highlightFirstWord(
                      "Создать единый список. Выпишите абсолютно все отложенные дела и «висяки», которые крутятся у вас в голове, в отдельный файл или блокнот."
                    )}
                  </p>
                </div>

                <div>
                  <h4 className={styles.h4}>- Категоризировать задачи:</h4>
                  <p className={styles.pContainer}>
                    {highlightFirstWord(
                      "Выполнить немедленно. Задачи, занимающие менее 15 минут (например, оплатить штраф, написать короткое письмо), сделайте сразу. Запланировать. Для дел, требующих больше 15 минут, установите конкретную дату, время и дедлайн в календаре. Удалить. Если невыполнение задачи не принесёт критических последствий, безжалостно удалите её из списка, чтобы освободить ментальный ресурс."
                    )}
                  </p>
                </div>

                <div>
                  <h4 className={styles.h4}>Работа с подавленными эмоциями:</h4>
                  <div className={styles.innerList}>
                    <p className={styles.pContainer}>
                      {highlightFirstWord(
                        "Физическая разгрузка. Регулярно занимайтесь спортом, бегом, единоборствами или просто гуляйте. Это помогает «сжечь» гормоны стресса (кортизол и адреналин)."
                      )}
                    </p>
                    <p className={styles.pContainer}>
                      {highlightFirstWord(
                        "Ведение дневника. Ежедневно записывайте все эмоции и переживания, накопившиеся за день (гнев, тревогу, обиды). Это снижает активность лимбической системы."
                      )}
                    </p>
                    <p className={styles.pContainer}>
                      {highlightFirstWord(
                        "Прямое выражение. Не держите в себе недовольство. Если вас что-то не устраивает в отношениях с людьми (на работе или в личной жизни), выскажите свою позицию. Это поможет не тратить ресурс на подавление гнева."
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          )}
        </InView>

        {/* Этап 2 */}
        <InView triggerOnce threshold={0.3}>
          {({ inView, ref }) => (
            <li ref={ref} className={styles.listItem(inView)}>
              <div className={styles.stageContainer}>
                <h3 className={styles.h3}>Этап 2: Восстановление мозга</h3>
                <span className={styles.span}>
                  После снятия основной нагрузки необходимо восстановить
                  нейронные связи и обеспечить мозг ресурсами.
                </span>
              </div>

              <div className={styles.innerList}>
                <p className={styles.pContainer}>
                  {highlightFirstWord(
                    "Больше ходить. Ходьба улучшает кровообращение (в том числе в префронтальной коре) и стимулирует работу внутренних органов, которые отвечают за синтез нейромедиаторов."
                  )}
                </p>
                <p className={styles.pContainer}>
                  {highlightFirstWord(
                    "Работать над дыханием. Освойте техники глубокого диафрагмального дыхания, чтобы бороться с гипоксией (нехваткой кислорода), которая ослабляет мозг."
                  )}
                </p>
              </div>
            </li>
          )}
        </InView>

        {/* Этап 3 */}
        <InView triggerOnce threshold={0.3}>
          {({ inView, ref }) => (
            <li ref={ref} className={styles.listItem(inView)}>
              <div className={styles.stageContainer}>
                <h3 className={styles.h3}>
                  Этап 3: Тренировка префронтальной коры
                </h3>
                <span className={styles.span}>
                  Этот этап направлен на укрепление силы воли, концентрации и
                  самоконтроля на физическом уровне.
                </span>
              </div>

              <div className={styles.innerList}>
                <p className={styles.pContainer}>
                  {highlightFirstWord(
                    'Практиковать рабочие "спринты". Выберите сложную задачу и работайте над ней 90 минут без переключений и отвлечений (телефон, уведомления, музыка). Если 90 минут — это слишком тяжело, начните с 45 минут и постепенно увеличивайте время.'
                  )}
                </p>
                <p className={styles.pContainer}>
                  {highlightFirstWord(
                    'Делать дыхательные упражнения после "спринта". Сразу после интенсивной работы сядьте в тишине на 15 минут и дышите по схеме: вдох (4 секунды) — задержка (6 секунд) — выдох (8 секунд). Это помогает успокоить лимбическую систему.'
                  )}
                </p>
                <p className={styles.pContainer}>
                  {highlightFirstWord(
                    "Тренировать отсрочку удовольствия. Когда возникает импульсивное желание (съесть сладкое, проверить соцсети), сознательно отложите его на 10 минут. Постепенно увеличивайте это время. Такая практика формирует новые нейронные связи, отвечающие за самоконтроль."
                  )}
                </p>
              </div>
            </li>
          )}
        </InView>
      </ul>
    </main>
  );
};
