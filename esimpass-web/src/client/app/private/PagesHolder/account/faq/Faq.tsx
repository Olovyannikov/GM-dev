import s from './Faq.module.scss';
import {BackArr} from '../../../../components/icons';
import {Accordion} from '../../../../components/accordion/Accordion';

interface FaqModel {
    back?: any;
}

export const Faq = (props: FaqModel) => {
    return (
        <div className={s.faq}>
            <button className={s.back} type="button" onClick={() => props.back(false)}>
                <BackArr stroke={'#000'}/>
                Часто задаваемые вопросы
            </button>
            <div className={s.category}>
                <h3>Категория вопросов 1</h3>
                <Accordion className={s.accordion} title={'Как eBaymag поможет мне с продажами?'}>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequatur debitis dolorum earum excepturi facere laborum nam officiis pariatur perferendis quia quo quos sint, tempore veniam. Earum fuga illum quos!
                    </span>
                </Accordion>
                <Accordion className={s.accordion}
                           title={'Могу ли я пользоваться eBaymag, если у меня есть подписка на магазин eBay?'}>
                    <span>
                        Это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов,
                        <br/>
                        Используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
                    </span>
                </Accordion>
            </div>

            <div className={s.category}>
                <h3>Категория вопросов 2</h3>
                <Accordion className={s.accordion} title={'Как eBaymag поможет мне с продажами?'}>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequatur debitis dolorum earum excepturi facere laborum nam officiis pariatur perferendis quia quo quos sint, tempore veniam. Earum fuga illum quos!
                    </span>
                </Accordion>
                <Accordion className={s.accordion}
                           title={'Могу ли я пользоваться eBaymag, если у меня есть подписка на магазин eBay?'}>
                    <span>
                        Это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов,
                        <br/>
                        Используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
                    </span>
                </Accordion>
            </div>

            <div className={s.category}>
                <h3>Категория вопросов 3</h3>
                <Accordion className={s.accordion} title={'Как eBaymag поможет мне с продажами?'}>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequatur debitis dolorum earum excepturi facere laborum nam officiis pariatur perferendis quia quo quos sint, tempore veniam. Earum fuga illum quos!
                    </span>
                </Accordion>
                <Accordion className={s.accordion}
                           title={'Могу ли я пользоваться eBaymag, если у меня есть подписка на магазин eBay?'}>
                    <span>
                        Это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов,
                        <br/>
                        Используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
                    </span>
                </Accordion>
            </div>
        </div>
    )
}
