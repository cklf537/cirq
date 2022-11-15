import React, { useContext } from 'react';
import { AppContext } from '../../data/app.context';
import { ConvertToSentanceCase } from '../../util/util';
import './question.scss'
import QuestionCard from '../card/card.component';
import Badge from '../badge/badge.component';

const RenderQestion = (props) => {
  const { questions } = useContext(AppContext);
  const {data} = questions;
  return (
    <>
      <form>
        {data &&
          data.map(({ question, ans, imp }, i) => (
            <section className="card-container " key={i}>
              <section className="answer-count ">
                <Badge />
               
              </section>
              <section className="card-body ">
                <h3 className='m0 p0'>{`${ConvertToSentanceCase(question)}`}</h3>
                {/* <h3>{question}</h3> */}
                <p className='m0 gt-10'>{ans ? ans : 'Be the first to answer'}</p>
                {imp ? (
                  <>
                    <p>EXAMPLE:</p>
                    <p>
                      {' '}
                      <textarea
                        value={imp}
                        className="code-block"
                      ></textarea>{' '}
                    </p>
                  </>
                ) : (
                  ''
                )}
                {/* <section className='question-card-metadata m0 p0'>
                  <span className="material-symbols-outlined">
                    arrow_drop_down
                  </span> Expand to see 0 more answers.
                </section> */}
              </section>
            </section>
          ))}
      </form>
    </>
  );
};

export default RenderQestion;
