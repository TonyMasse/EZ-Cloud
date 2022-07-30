const filterTemplate = `# -------------------------------------------
# THIS TRANSFORM WAS AUTOMATICALLY GENERATED.
# ANY MANUAL MODIFICATION WILL BE LOST.
# -------------------------------------------
# Generated on: {{EZ_generation_timestamp}}
# By: {{EZ_generation_user}}
# For Stream: {{EZ_stream_name_placeholder}}
# UID: {{EZ_stream_id_placeholder}}
# -------------------------------------------

# is_matching checks if the data matches the {{EZ_stream_name_placeholder}} criteria
def is_matching:
    (."@metadata".beat | ascii_downcase == ("{{EZ_beat_name_placeholder}}" | ascii_downcase))
    and
    (.heartbeat == null)
    and
    (
      ."@metadata".fields.stream_id == "{{EZ_stream_id_placeholder}}"
      or
      ."@metadata".fields.stream_name == "{{EZ_stream_name_placeholder}}"
      or
      ."@metadata".filter_helpers.stream_id == "{{EZ_stream_id_placeholder}}"
      or
      ."@metadata".filter_helpers.stream_name == "{{EZ_stream_name_placeholder}}"
      or
      ."@metadata".device_type == "{{EZ_stream_name_placeholder}}"
      or
      ."@metadata".device_type == "{{EZ_compact_stream_name_placeholder}}"
      or
      .device_type == "{{EZ_stream_name_placeholder}}"
      or
      .device_type == "{{EZ_compact_stream_name_placeholder}}"
      or
      .fullyqualifiedbeatname == "{{EZ_beat_fully_distinguished_name_placeholder}}"
    )
;
`

const transformTemplate = `# -------------------------------------------
# THIS TRANSFORM WAS AUTOMATICALLY GENERATED.
# ANY MANUAL MODIFICATION WILL BE LOST.
# -------------------------------------------
# Generated on: {{EZ_generation_timestamp}}
# By: {{EZ_generation_user}}
# For Stream: {{EZ_stream_name_placeholder}}
# UID: {{EZ_stream_id_placeholder}}
# -------------------------------------------

# -----------------
# UTILITY FUNCTIONS
# -----------------

# flatten_array will flatten or fan out the pipeline, returning n values
#  where n is the number of array records in the log message. If there are no records
#  the input is returned unchanged
def flatten_array($log_msg_field):
    if $log_msg_field then
        if ($log_msg_field | length) > 0 then
            # flatten our records into one message each
            $log_msg_field[]
        else
            .
        end
    else
        .
    end
;

# add_field adds a key-value pair to the metadata objects generated by get_io_format
# Takes an input and output filter as parameters
# Capable of adding data to any of the objects in the metadata JSON (input, output, subrule, transform_path, etc)
# This function should be used for adding all metadata to your output - It scrubs illegal characters like | and \n
# Example function call: add_field(.input.field1; .output.subject)
def add_field($input_field; output_field):

    #Check for pipe character
    ($input_field | tojson) as $input_field_string
    
    (($input_field_string | contains("|")) or ($input_field_string | contains("\\n")) | not ) as $nobadchars

    if
        $input_field and $nobadchars
    then
        output_field = $input_field
    elif 
        $input_field and ($nobadchars | not)
    then
        #remove pipes and newline characters from input_field
        ($input_field_string | split("|") | join("-")) as $input_field_nopipes |
        ($input_field_nopipes | split("\\n") | join(" ")) as $input_field_nobadchars |
        output_field = ($input_field_nobadchars | fromjson)
    else
        .
    end
;

# -----------------
# DATA TRANSFORM
# -----------------

# get_io_format converts incoming data to a standard IO format. The original
#   content is added to the output in the "original_message" field automatically.
def get_io_format:
    {
        "input": .,
        "message": if .message != null then (.message | fromjson) else {} end,
{{EZ_flatten_array_placeholder}}
        "output": {
            "original_message": {{EZ_original_message_placeholder}}
        }
    }
;

# transform will normalize the incoming log into the LogRhythm Schema
#   that can then be forwarded to the SIEM
def transform:
    # First, convert to IO format.
    get_io_format |

    # "beatname" is a required field for OpenCollector Regex to work in the SIEM.
    # We add here more details to help the Log Source Virtualisation

    add_field(.input."@metadata".beat; .output.beatname) | # For the Log Source Virtualisation
    add_field("{{EZ_compact_stream_name_placeholder}}"; .output.device_type) | # For the Log Source Virtualisation
    add_field("{{EZ_stream_id_placeholder}}"; .output.stream_id) | # For the Log Source Virtualisation (optional)
    add_field("{{EZ_stream_name_placeholder}}"; .output.stream_name) |

    # If required, the Timestamp field(s)

{{EZ_timestamp__add_field_placeholder}}

    # If required, the Fanned out fields

{{EZ_flatten_array__add_field_placeholder}}

    # The rest of the Fields mapping

{{EZ_add_field_placeholder}}

    # For the Sub Rules

{{EZ_sub_rules__add_field_placeholder}}

    # this filter produces the output object, for sending to SYSLOG output
    # This filter should be left in place in most cases
    .output
;
`

export {
  filterTemplate,
  transformTemplate
}
