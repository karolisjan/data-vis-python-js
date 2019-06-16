'''
    SQLAlchemy example.
'''
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Enum


ENGINE = create_engine('sqlite:///data/data.db', echo=True)
BASE = declarative_base()


class Winner(BASE):
    __tablename__ = 'winners'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    category = Column(String)
    year = Column(Integer)
    nationality = Column(String)
    sex = Column(Enum('male', 'female'))

    def __repr__(self):
        return f"<Winner(name='{self.name}', category='{self.category}', year='{self.year}'>"

if __name__ == '__main__':
    BASE.metadata.create_all(ENGINE)

    nobel_winners = [
        {
            'category': 'Physics',
            'name': 'Albert Einstein',
            'nationality': 'Swiss',
            'sex': 'male',
            'year': 1921
        }
    ]

    session = sessionmaker(bind=ENGINE)()

    try:
        session.add(Winner(**nobel_winners[0]))
        session.flush()
        session.commit()
    except:
        session.rollback()
        pass

    print(session.new)

    result = session.query(Winner)

    for r in result:
        print(r)

