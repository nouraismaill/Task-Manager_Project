import React, { useState } from "react";
const ListCard = ({ task, index, onEdit, onDelete, onShare, viewOnly }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);
  const [newStatus, setNewStatus] = useState(task.status);

  const handleSave = () => {
    onEdit(task.id, newDescription, newStatus);
    setIsEditing(false);
  };

  return (
    <div className="  ">
      <ul
        className={`${
          task.status === "Completed"
            ? "bg-green-200 rounded-md justify-between space-x-30 flex flex-row items-center my-3 mx-8 mr-[110px] h-20  px-10 p-3 box-border shadow-lg"
            : " justify-between rounded-md space-x-30 flex flex-row items-center my-3 mx-8 mr-[110px] h-20  px-10 p-3 box-border shadow-lg"
        }`}
      >
        <li className="text-gray-600 p-4 ml-[-20px] flex-1">{index}</li>
        {isEditing ? (
          <>
            <li className="text-gray-600 mr-[160px] p-4 flex-1">
              <input
                type="text"
                value={newDescription}
                className="w-full px-4 py-2 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-300"
                onChange={(e) => setNewDescription(e.target.value)}
              />
            </li>
            <li className="text-gray-600 p-[-60px] pl-[-200px] flex-1">
              <select
                className="w-full px-4 py-2 mx-[-100px] border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-300"
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
              >
                <option value="Open">Open</option>
                <option value="In Progress">In Progress</option>
                <option value="Paused">Paused</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </li>
            <li className="text-gray-600  flex-1">
              <button
                className="bg-green-500 md:mx-[-20px] lg:mx-[40px] hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow"
                onClick={handleSave}
              >
                Save
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="text-gray-600 ml-[15px] p-4 flex-1">
              {task.description}
            </li>
            <li className="text-gray-600 p-4 pl-[50px] flex-1">
              {task.status}
            </li>

            {!viewOnly && (
              <>
                <li className="mx-[-10px]">
                  <button
                    className="editBtn px-[17px] py-[15px] mx-4 "
                    onClick={() => setIsEditing(true)}
                  >
                    <svg height="1em" viewBox="0 0 512 512">
                      <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                    </svg>
                  </button>
                  <button
                    className="bin-button  px-[17px] py-[15px] "
                    onClick={() => onDelete(task.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 39 7"
                      class="bin-top "
                    >
                      <line
                        stroke-width="4"
                        stroke="white"
                        y2="5"
                        x2="39"
                        y1="5"
                      ></line>
                      <line
                        stroke-width="3"
                        stroke="white"
                        y2="1.5"
                        x2="26.0357"
                        y1="1.5"
                        x1="12"
                      ></line>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 33 39"
                      class="bin-bottom "
                    >
                      <mask fill="white" id="path-1-inside-1_8_19">
                        <path d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"></path>
                      </mask>
                      <path
                        mask="url(#path-1-inside-1_8_19)"
                        fill="white"
                        d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                      ></path>
                      <path
                        stroke-width="4"
                        stroke="white"
                        d="M12 6L12 29"
                      ></path>
                      <path stroke-width="4" stroke="white" d="M21 6V29"></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 89 80"
                      class="garbage "
                    >
                      <path
                        fill="white"
                        d="M20.5 10.5L37.5 15.5L42.5 11.5L51.5 12.5L68.75 0L72 11.5L79.5 12.5H88.5L87 22L68.75 31.5L75.5066 25L86 26L87 35.5L77.5 48L70.5 49.5L80 50L77.5 71.5L63.5 58.5L53.5 68.5L65.5 70.5L45.5 73L35.5 79.5L28 67L16 63L12 51.5L0 48L16 25L22.5 17L20.5 10.5Z"
                      ></path>
                    </svg>
                  </button>
                  <button
                    className="shareBtn px-[13px] py-[15px] mx-4 "
                    onClick={() => {
                      const shareWithUserId = prompt(
                        "Enter The user ID to share With:"
                      );
                      if (shareWithUserId) {
                        onShare(task.id, shareWithUserId);
                      }
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      id="Share--Streamline-Ultimate"
                      height="24"
                      width="24"
                    >
                      <desc>
                        Share Streamline Icon: https://streamlinehq.com
                      </desc>
                      <path
                        stroke="#ffffff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M1.5 11.25c0 0.9946 0.39509 1.9484 1.09835 2.6517C3.30161 14.6049 4.25544 15 5.25 15c0.99456 0 1.94839 -0.3951 2.65165 -1.0983C8.60491 13.1984 9 12.2446 9 11.25c0 -0.9946 -0.39509 -1.94839 -1.09835 -2.65165S6.24456 7.5 5.25 7.5c-0.99456 0 -1.94839 0.39509 -2.65165 1.09835S1.5 10.2554 1.5 11.25Z"
                        stroke-width="1.5"
                      ></path>
                      <path
                        stroke="#ffffff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 6c0 0.99456 0.3951 1.94839 1.0983 2.65165C16.8016 9.35491 17.7554 9.75 18.75 9.75c0.9946 0 1.9484 -0.39509 2.6517 -1.09835C22.1049 7.94839 22.5 6.99456 22.5 6c0 -0.99456 -0.3951 -1.94839 -1.0983 -2.65165C20.6984 2.64509 19.7446 2.25 18.75 2.25c-0.9946 0 -1.9484 0.39509 -2.6517 1.09835C15.3951 4.05161 15 5.00544 15 6Z"
                        stroke-width="1.5"
                      ></path>
                      <path
                        stroke="#ffffff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 18c0 0.9946 0.3951 1.9484 1.0983 2.6517 0.7033 0.7032 1.6571 1.0983 2.6517 1.0983 0.9946 0 1.9484 -0.3951 2.6517 -1.0983C22.1049 19.9484 22.5 18.9946 22.5 18c0 -0.9946 -0.3951 -1.9484 -1.0983 -2.6517 -0.7033 -0.7032 -1.6571 -1.0983 -2.6517 -1.0983 -0.9946 0 -1.9484 0.3951 -2.6517 1.0983C15.3951 16.0516 15 17.0054 15 18Z"
                        stroke-width="1.5"
                      ></path>
                      <path
                        stroke="#ffffff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m8.74597 9.89099 6.50803 -2.531"
                        stroke-width="1.5"
                      ></path>
                      <path
                        stroke="#ffffff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m8.60498 12.928 6.79002 3.395"
                        stroke-width="1.5"
                      ></path>
                    </svg>{" "}
                  </button>
                </li>
              </>
            )}
          </>
        )}
      </ul>
    </div>
  );
};
export default ListCard;
