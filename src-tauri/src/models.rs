use diesel::prelude::*;

#[derive(Queryable, Selectable)]
#[diesel(table_name = crate::schema::members)]
#[diesel(check_for_backend(diesel::sqlite::Sqlite))]
pub struct Member {
    pub id: i32,
    pub title: String,
    pub body: String,
    pub published: bool,
}
