import React, { useContext } from 'react';
import { AppContext } from '../../data/app.context';
import { ConvertToSentanceCase } from '../../util/util';
import './question.scss'
import QuestionCard from '../card/card.component';
import Badge from '../badge/badge.component';

const RenderQestion = (props) => {
  const questions = useContext(AppContext);
  // console.log(questions);
  return (
    <>
    {/* <QuestionCard /> */}
      <form>
        {questions &&
          questions.map(({ question, ans, imp }, i) => (
            <section className="card-container" key={i}>
              <section className="answer-count">
                {/* <div className='util-count'>2</div> */}
                {/* <div className='util-count'><span class="material-symbols-outlined" title='Answers'>comment</span>24</div> */}
                <Badge />
                {/* <div className='util-count'>15</div> */}
              </section>
              <section className="card-body">
                <h3>{`${ConvertToSentanceCase(question)}`}</h3>
                <p>{ans ? ans : '-- Coming soon... --'}</p>
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
                <section className='question-card-metadata'>
                  {/* <section>
                    <textarea>
                      some text
                    </textarea>
                    <button>Post Answer</button>
                  </section> */}
                  
                  <span class="material-symbols-outlined">share</span>
                  
                  <span class="material-symbols-outlined">
                    thumb_up_off
                  </span>
                  <span class="material-symbols-outlined">
                    thumb_down_off
                  </span>
                  <span class="material-symbols-outlined">
                    group
                  </span>
                </section>
              </section>
            </section>
          ))}
      </form>
    </>
  );
};

export default RenderQestion;
