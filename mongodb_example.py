'''
    MongoDB example.

    Start MongoDB with:

    $ mongod --dbpath /path/to/db_dir
'''

from pymongo import MongoClient


def get_mongo_db(
    db_name,
    host='localhost',
    port=27017,
    username=None,
    password=None
):
    if username and password:
        mongo_uri = f"mongodb://{username}:{password}@{host}/{db_name}"
        conn = MongoClient(mongo_uri)
    else:
        conn = MongoClient(host, port)

    return conn[db_name]


def mongo_table_to_records(
    db_name,
    table_name,
    query=dict(),
    del_id=True,
    **kwargs
):
    db = get_mongo_db(db_name, **kwargs)
    table = db[table_name]
    result = list(table.find(query))

    if del_id:
        for r in result:
            r.pop('_id')

    return result


if __name__ == '__main__':
    nobel_winners = [
        {
            'name': 'Albert Einstein',
            'category': 'Physics',
            'year': 1921,
            'nationality': 'Swiss',
            'sex': 'male',
        },
        {
            'name': 'Paul Dirac',
            'category': 'Physics',
            'year': 1933,
            'nationality': 'British',
            'sex': 'male',
        },
        {
            'name': 'Marie Curie',
            'category': 'Chemistry',
            'year': 1911,
            'nationality': 'Polish',
            'sex': 'female',
        }
    ]

    db_name = 'nobel_prize'
    table_name = 'winners'

    db = get_mongo_db(db_name)

    try:
        db[table_name].drop()
    except:
        pass

    table = db[table_name]
    table.insert_many(nobel_winners)

    result = table.find({'category': 'Chemistry'})
    print(list(result))

    result = table.find({'year': {'$gt': 1930}})
    print(list(result))

    result = table.find(
        {'$or': [
            {'year': {'$gt': 1930}},
            {'sex': 'female'}
        ]}
    )
    print(list(result))

    print(mongo_table_to_records(db_name, table_name))

