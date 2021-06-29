// import React from 'react'
import Link from "next/link";
import Image from "next/image";

const RecipeCard = ({ recipe }) => {
  const { title, slug, cookingTime, thumbnail } = recipe.fields;
  return (
    <div className="card">
      <div className="featured">
        <Image
          className="img"
          src={`https:${thumbnail.fields.file.url}`}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
        />
      </div>
      <div className="content">
        <div className="info">
          <h3>{title}</h3>
          <p>Takes Approx {cookingTime} mins to make</p>
        </div>

        <div className="actions">
          <Link href={`/recipes/${slug}`}>
            <a>Cook this</a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        
        .content {
          background: #fff;
          box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.1);
          margin: 0;
          position: relative;
          top: -10px;
          left: -20px;

        }
        .info {
          padding: 5px;
        }
        .info h4 {
          margin: 4px 0;
          cursor: pointer;
          text-transform: uppercase;
        }
        .info p {
          margin: 0;
          color: #777;
        }
        .actions {
          margin-top: 20px;
          display: flex;
          justify-content: flex-end;
        }
        .actions a {
          color: #fff;
          background: #f01b29;
          padding: 16px 24px;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default RecipeCard;
