import React from 'react';
import styled from 'styled-components';
import { Bakery1, Bakery2 } from '../assets';

const Wrapper = styled.section`
  .info {
    padding: 10rem;
    text-align: center;
    background-color: var(--color-grey-dark);
    color: #fff;

    & .info-grid {
      display: grid;
      column-gap: 5rem;
      grid-template-columns: repeat(3, 1fr);
      justify-content: space-between;
      justify-items: center;

      & .info-bakery {
        max-width: 30rem;

        & img {
          object-fit: cover;
          width: 100%;
          margin-bottom: 2.5rem;
          border: 0.5rem solid white;
        }
      }

      & .opening-hours {
        border: 0.5rem solid white;
        max-width: 35rem;
        height: 100%;
        padding: 1.5rem;

        & td {
          font-size: 2.5rem;
        }
      }
    }
  }

  @media only screen and (max-width: 1100px) {
    .info .info-grid {
      grid-template-columns: repeat(2, 1fr);

      & .info-bakery {
        margin-bottom: 5rem;
      }

      & .opening-hours {
        grid-column: 1/3;
        height: 46rem;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .info {
      padding: 10rem 0;

      & .info-grid {
        grid-template-columns: 1fr;
        justify-content: center;

        & .opening-hours {
          grid-column: 1;
        }
      }
    }
  }
`;

function Info() {
  return (
    <Wrapper>
      <section className='info'>
        <article className='info-grid'>
          <div className='info-bakery'>
            <img src={Bakery1} alt='bakery-1' />
            <p>
              Vivamus sodales congue sollicitudin. Integer semper odio et ante
              finibus, vitae lobortis eros lobortis. Sed velit velit, dapibus at
              cursus eu, pulvinar sed purus. Donec posuere iaculis luctus. Fusce
              ultrices.
            </p>
          </div>
          <div className='info-bakery'>
            <img src={Bakery2} alt='bakery-2' />
            <p>
              Vivamus sodales congue sollicitudin. Integer semper odio et ante
              finibus, vitae lobortis eros lobortis. Sed velit velit, dapibus at
              cursus eu, pulvinar sed purus. Donec posuere iaculis luctus. Fusce
              ultrices.
            </p>
          </div>
          <table className='opening-hours'>
            <thead>
              <tr>
                <th colSpan='2'>
                  <h2 className='heading-2'>Opening Hours</h2>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monday:</td>
                <td>7AM - 7PM</td>
              </tr>
              <tr>
                <td>Tuesday:</td>
                <td>7AM - 7PM</td>
              </tr>
              <tr>
                <td>Wednesday:</td>
                <td>7AM - 7PM</td>
              </tr>
              <tr>
                <td>Thrusday:</td>
                <td>7AM - 7PM</td>
              </tr>
              <tr>
                <td>Friday:</td>
                <td>7AM - 7PM</td>
              </tr>
              <tr>
                <td>Saturday:</td>
                <td>7AM - 7PM</td>
              </tr>
              <tr>
                <td>Sunday:</td>
                <td>Closed</td>
              </tr>
            </tbody>
          </table>
        </article>
      </section>
    </Wrapper>
  );
}

export default Info;
