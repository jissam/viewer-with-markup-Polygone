import React, { useState, useEffect } from 'react';
import { TablePagination } from '@mui/material';
import MarkupUpdateForm from './MarkupUpdateForm'; // Importez le composant du formulaire de modification
import { OBJECT_URN } from '../MarkupDisplayPanel';

const MarkupDisplayPanelContent = ({ onUpdate }) => {
  const [markupData, setMarkupData] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedMarkup, setSelectedMarkup] = useState(null);
  const [isEditing, setIsEditing] = useState(false); // State pour suivre si le formulaire de modification doit être affiché


  function handleRefresh() {
    loadDataFromServer();
  }

  const rowsPerPageOptions = [
    { label: '10', value: 10 },
    { label: '15', value: 15 },
    { label: '20', value: 20 },
    { label: 'ALL', value: -1 },
  ];

  const loadDataFromServer = async () => {
    try {
      const response = await fetch('/aps/api/markups');
      const data = await response.json();
      console.log('data', data);
      const filter = data.filter(item => item.modelId === OBJECT_URN);
      console.log('Données filtrées :', filter);
      setFilteredData(filter);
      setMarkupData(filter);
    } catch (error) {
      console.error('Erreur lors du chargement des données depuis le serveur:', error);
    }
  };

  useEffect(() => {
    loadDataFromServer();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    setRowsPerPage(newRowsPerPage);
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    const filtered = markupData.filter(
      (row) =>
        row.markupTitle.toLowerCase().includes(event.target.value.toLowerCase()) ||
        row.elementName.toLowerCase().includes(event.target.value.toLowerCase()) ||
        row.author.toLowerCase().includes(event.target.value.toLowerCase()) ||
        row.status.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleSort = (columnId) => {
    const newSortOrder = sortBy === columnId && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortBy(columnId);
    setSortOrder(newSortOrder);

    const sortedData = [...markupData].sort((a, b) => {
      const aValue = a[columnId].toLowerCase();
      const bValue = b[columnId].toLowerCase();

      if (newSortOrder === 'asc') {
        return aValue.localeCompare(bValue, undefined, { sensitivity: 'base' });
      } else {
        return bValue.localeCompare(aValue, undefined, { sensitivity: 'base' });
      }
    });
    setFilteredData(sortedData);
  };

    const handleRowClick = (markup) => {
    onUpdate(markup.elementId);
    setSelectedRow(markup.markupId === selectedRow ? null : markup.markupId);
  };

  const getRowClassName = (markup) => {
    return markup.markupId === selectedRow ? "text-center whitespace-nowrap hover:bg-slate-100 bg-slate-100" : "text-center whitespace-nowrap hover:bg-slate-100";
  };
  const handleEditClick = (markup) => {
    setIsEditing(true); // Afficher le formulaire de modification
    setSelectedMarkup(markup); // Passer les données de la ligne sélectionnée au formulaire
  };
  return (
    <div>
      {filteredData && filteredData.length > 0 && (
        <div className="w-full container mx-auto flex flex-col">
          <div className="relative mt-2 ml-2 mr-2 mb-2 flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="text"
                id="table-search-users"
                className="block p-2 pl-10 text-sm text-gray-900 border border-sky-600 rounded-lg w-80 bg-gray-50"
                placeholder="Search"
                variant="outlined"
                value={search}
                onChange={handleSearchChange}
              />
              <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
            </div>
            <button
              className='relative justify-between rounded-lg shadow-md'
              onClick={handleRefresh}
              title="Reload"
            >
              <svg
                className="h-8 w-8 text-sky-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <polyline points="1 4 1 10 7 10" />
                <polyline points="23 20 23 14 17 14" />
                <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
              </svg>
            </button>
          </div>
          <div className={`overflow-auto ml-2 mr-2 journal-scroll`} style={{ height: '470px' }}>
            <table className="divide-y divide-gray-300 border border-gray-300 " id="dataTable">
              <thead className="font-medium rounded-lg px-5 py-2.5">
                <tr>
                  <th style={{ height: '5px', fontSize: '0.8rem' }} className="bg-white px-2 py-2 text-base text-left text-black border-2 border-white border-e-gray-300 border-b-gray-300">
  
                  </th>
                  <th style={{ height: '5px', fontSize: '0.8rem' }} className="bg-slate-200 px-2 py-2 text-base text-left text-black border-2 border-gray-300 border-b-sky-600" onClick={() => handleSort('markupTitle')}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <div>Title</div>
                      <svg
                        className="w-2 h-2 ml-1 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 10"
                      >
                        <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
                      </svg>
                    </div>
                  </th>
                  <th style={{ height: '5px', fontSize: '0.8rem' }} className="bg-slate-200 px-2 py-2 text-sm text-left text-black border-2 border-gray-300 border-b-sky-600" onClick={() => handleSort('elementName')}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <div>Element Name</div>
                      <svg
                        className="w-2 h-2 ml-1 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 10"
                      >
                        <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
                      </svg>
                    </div>
                  </th>
                  {/*<th className="bg-slate-200 px-2 py-2 text-sm text-left text-black border-2 border-gray-300 border-b-sky-600">markup ID</th>*/}
  
                  <th style={{ height: '5px', fontSize: '0.8rem' }} className="bg-slate-200 px-2 py-2 text-sm text-left text-black border-2 border-gray-300 border-b-sky-600" onClick={() => handleSort('author')}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <div>Author</div>
                      <svg
                        className="w-2 h-2 ml-1 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 10"
                      >
                        <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
                      </svg>
                    </div>
                  </th>
  
                  <th style={{ height: '5px', fontSize: '0.8rem' }} className="bg-slate-200 px-2 py-2 text-sm text-left text-black border-2 border-gray-300 border-b-sky-600" onClick={() => handleSort('status')}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <div>Status</div>
                      <svg
                        className="w-2 h-2 ml-1 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 10"
                      >
                        <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
                      </svg>
                    </div>
                  </th>
                  <th className="bg-slate-200 px-2 py-2 text-sm text-left text-black border-2 border-gray-300 border-b-sky-600">Description</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-300">
                {filteredData.length > 0 ? (
                  filteredData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((markup, index) => (
                      <tr key={index} className={getRowClassName(markup)} onClick={() => handleRowClick(markup)}>
                        <td className="px-2 py-2 text-xs text-left text-gray-700 border-2 border-gray-300 ">
                          <svg className="h-6 w-6 text-sky-600" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" onClick={() => handleEditClick(markup)}>
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                            <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                            <line x1="16" y1="5" x2="19" y2="8" />
                          </svg>
                        </td>
                        <td className="px-2 py-2 text-xs text-left text-gray-700">{markup.markupTitle}</td>
                        <td className="px-2 py-2 text-xs text-left text-gray-700">{markup.elementName}</td>
                        {/*<td className="px-2 py-2 text-xs text-left text-gray-700">{markup.markupId}</td>*/}
                        <td className="px-2 py-2 text-xs text-left text-gray-700">{markup.author}</td>
                        <td className="px-2 py-2 text-xs text-left text-gray-700">{markup.status}</td>
                        <td className="px-2 py-2 text-xs text-left text-gray-700">{markup.markups}</td>
                      </tr>
                    ))
                ) : (
                  <tr style={{ height: 53 }}>
                    <td colSpan={7} />
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {isEditing && selectedMarkup && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
              <div className="bg-white p-8 rounded-lg h-auto max-h-full max-w-xl">
                <MarkupUpdateForm markup={selectedMarkup} onClose={() => setIsEditing(false)} />
              </div>
            </div>
          )}
  
 
  <TablePagination
    className="custom-table-pagination"
    rowsPerPageOptions={rowsPerPageOptions}
    component="div"
    count={filteredData.length}
    rowsPerPage={rowsPerPage}
    page={page}
    onPageChange={handleChangePage}
    onRowsPerPageChange={handleChangeRowsPerPage}
    SelectProps={{
      //renderValue: (value) => value === -1 ? 'All' : value.toString(),
      classes: {
        select: "px-3 py-2 text-white",
      },
      style: { border: "1px solid #0284c7" },
    }}
    classes={{
      root: "flex justify-center mt-6 ",
      spacer: "hidden",
      selectIcon: "text-white ",
      actions: "flex items-center border border-sky-600 rounded-md ",
      caption: "ml-2 text-gray-600",
      menuItem: "px-3 py-2 hover:bg-sky-600 rounded-md ",
      menuItemActive: "px-3 py-2 bg-sky-600 rounded-md ",
      input: "border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500",
    }}
  />

        </div>
      )}
      {filteredData && filteredData.length === 0 && (
        <p className="text-center mt-64">No Markups For This Model.</p>
      )}
    </div>
  );
  
};

export default MarkupDisplayPanelContent;
