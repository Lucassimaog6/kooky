export default function ImageGrid({
    listUrls,
    cols,
  }) {
    // Criação da estrutura da grade
    const columns = Array.from(Array(cols), () => ({
      urls: [],
      height: 0,
    }));
  
    // Preenchimento da grade
    for (const url of listUrls) {
      const minColumn = columns.reduce((min, column) => (column.height < min.height ? column : min));
      minColumn.urls.push(url);
      minColumn.height += 1;
    }
  
    // Retorno da grade de imagens
    return (
      <div className={`grid grid-cols-${cols} gap-4`}>
        {columns.map((column, colIndex) => (
          <div className="flex flex-col gap-4" key={colIndex}>
            {column.urls.map((url, imgIndex) => (
              <img className="w-full rounded-lg" key={imgIndex} src={url} />
            ))}
          </div>
        ))}
      </div>
    );
  }