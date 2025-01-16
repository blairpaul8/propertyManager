const group_name_and_inputs = document.createElement('div');
          group_name_and_inputs.classList.add('group_name');
          header.appendChild(group_name_and_inputs);

          const location_and_common_name = document.createElement('div');
          location_and_common_name.classList.add('location_and_name');
          group_name_and_inputs.appendChild(location_and_common_name);

          const commonName = document.createElement('p');
          commonName.classList.add('commonName');
          commonName.textContent = 'Name: ';
          location_and_common_name.appendChild(commonName);

          const common_name_input = document.createElement('input');
          common_name_input.classList.add('common_name_input');
          location_and_common_name.appendChild(common_name_input);


          common_name_input.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
              // Get the input value
              const commonNameInput = common_name_input.value;
              item.commonName = commonNameInput;

              / Create a <p> tag to replace the input field
              const pTagCommonName = document.createElement('p');
              pTagCommonName.textContent = commonNameInput; // Use item.commonName or the input value

              // Replace the input field with the <p> tag
              location_and_common_name.replaceChild(
                pTagCommonName,
                common_name_input,/
              );
            }
          });


          location_and_common_name.appendChild(common_name_input);

         






          function save_to_local_storage() {
            localStorage.setItem('items', JSON.stringify(items));
            localStorage.setItem('roles', JSON.stringify(roles));
            localStorage.setItem('boxes_list', JSON.stringify(boxes_list));
            console.log('Settings Saved');
      
            // Show notification
            const notification = document.getElementById('notificationSaved');
            notification.style.opacity = '1';
      
            // Hide notification after 1.5 seconds
            setTimeout(() => {
              notification.style.opacity = '0';
            }, 1000);
          }