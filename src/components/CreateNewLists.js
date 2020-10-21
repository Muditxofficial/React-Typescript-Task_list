import React, { FC } from "react";

const CreateNewList: FC = () => {
  return (
    <div className='card mb-5'>
      <div className='card-header'>
        <p className='card-header-title'>Create New List</p>
      </div>
      <div className='card-content'>
        <form>
          <div className='field'>
            <label className='label'>List Name</label>
            <div className='control'>
              <input
                className='input'
                type='text'
                placeholder='List Name'
                name='listname'
                value={listName}
                onChange={inputChangeHandler}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
