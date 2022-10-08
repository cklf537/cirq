import React, { useContext } from 'react';
import { AppContext } from '../../data/app.context';
import { ConvertToSentanceCase } from '../../util/util';
import './question.scss';

const RenderQestion = (props) => {
  const questions = useContext(AppContext);
  // console.log(questions);
  return (
    <>
      <form>
        {questions &&
          questions.map(({ question, ans, imp }, i) => (
            <section className="q-section" key={i}>
              {/* <h3>
              what is Different techniques which can be followed to optimize the
              PERFORMANCE of HTML Page load (Caching/ hosting Images in CDN
              server/ etc.)?
            </h3>
            <p>
              Any text wrap that occurs at a soft wrap opportunity is referred
              to as a soft wrap break. For wrapping to occur at a soft wrap
              opportunity, you ...
            </p> */}
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
              <section className="ref-bar"></section>
            </section>
          ))}
      </form>
    </>
  );
};

export default RenderQestion;
