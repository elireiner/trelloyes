import React from 'react'
import './List.css';
import Card from './Card';

class List extends React.Component {

    static defaultProps = {
        cards: []
    };
    
newRandomCard = () => {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
  }

    render() {
        return (

            <section className='List'>
                <header className='List-header'>
                    <h2>{this.props.header}</h2>
                </header>
                <div className='List-cards'>
                    {this.props.cards.map((card) =>
                        <Card
                            key={card.id}
                            title={card.title}
                            content={card.content}
                            handleDelete={() => this.props.handleDelete}
                        />
                    )}
                    <button
                        type="button"
                        className="List-add-button"
                        onClick={this.props.handleRandom}
                    >
                        + Add Random Card
                    </button>
                </div>
            </section>


        )
    }
}

export default List